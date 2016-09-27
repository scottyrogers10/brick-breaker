define(function() {
    var RigidCollisionSystem = function() {
        this.type = "rigidCollisionSystem";
        this.game = null;
        this.isReady = false;
        this.cellSize = 100;
    };

    RigidCollisionSystem.prototype.getNonStaticCollidables = function(collidableEntities) {
        var nonStaticCollidables = [];

        for (var i = 0; i < collidableEntities.length; i++) {
            var collidableComponent = collidableEntities[i].getActiveComponentByType("collidable");
            if (!collidableComponent.isStatic) {
                nonStaticCollidables.push(collidableEntities[i]);
            }
        }

        return nonStaticCollidables;
    };

    RigidCollisionSystem.prototype.sweepAndPrune = function(entities) {
        var camera = this.game.getCameraById("main-camera");

        var gridWidth = Math.floor((camera.height) / this.cellSize);
        var gridHeight = Math.floor((camera.width) / this.cellSize);
        var left;
        var right;
        var top;
        var bottom;
        var i;
        var j;
        var entity;
        var cX;
        var cY;
        var gridCol;
        var gridCell;
        var size;
        var position;
        var grid;

        // construct grid
        // NOTE: this is a purposeful use of the Array() constructor
        grid = new Array(gridWidth);

        // insert all entities into grid
        for (i = 0; i < entities.length; i++) {
            entity = entities[i];
            rigidBody = entity.getActiveComponentByType("rigidBody");
            position = entity.getActiveComponentByType("position");
            position = {
                y: position.y + rigidBody.offsetY,
                x: position.x + rigidBody.offsetX
            };

            // if entity is outside the camera extents, then ignore it
            if (
                position.x < camera.offset.x || position.x > camera.width ||
                position.y < camera.offset.y || position.y > camera.height
            ) {
                continue;
            }

            // Find the cells that the entity overlap.
            left = Math.floor((position.x) / this.cellSize);
            right = Math.floor((position.x + rigidBody.w) / this.cellSize);
            top = Math.floor((position.y) / this.cellSize);
            bottom = Math.floor((position.y + rigidBody.h) / this.cellSize);

            // Insert entity into each cell it overlaps
            for (cX = left; cX <= right; cX++) {

                // Make sure a column exists, initialize if not to grid height length
                // NOTE: again, a purposeful use of the Array constructor
                if (!grid[cX]) {
                    grid[cX] = Array(gridHeight);
                }

                gridCol = grid[cX];

                // Loop through each cell in this column
                for (cY = top; cY <= bottom; cY++) {

                    // Ensure we have a bucket to put entities into for this cell
                    if (!gridCol[cY]) {
                        gridCol[cY] = [];
                    }

                    gridCell = gridCol[cY];

                    // Add entity to cell
                    gridCell.push(entity);
                }
            }
        }

        return grid;
    };

    RigidCollisionSystem.prototype.detectCollisions = function(grid) {
        var entityA;
        var entityB;
        var hash;
        var i;
        var j;
        var k;
        var l;
        var gridCol;
        var gridCell;
        var collisionA;
        var collisionB;
        var rigidBodyA;
        var positionA;
        var rigidBodyB;
        var positionB;
        var top;
        var bottom;
        var left;
        var right;
        var collisionIndex;
        var entityIndex;

        // for every column in the grid...
        for (i = 0; i < grid.length; i++) {

            gridCol = grid[i];

            // ignore columns that have no cells
            if (!gridCol) {
                continue;
            }

            // for every cell within a column of the grid...
            for (j = 0; j < gridCol.length; j++) {

                gridCell = gridCol[j];

                // ignore cells that have no objects
                if (!gridCell) {
                    continue;
                }

                // for every object in a cell...
                for (k = 0; k < gridCell.length; k++) {

                    entityA = gridCell[k];

                    // for every other object in a cell...
                    for (l = k + 1; l < gridCell.length; l++) {
                        entityB = gridCell[l];

                        collidableA = entityA.getActiveComponentByType("collidable");
                        collidableB = entityB.getActiveComponentByType("collidable");

                        // We don't need to check static or disabled objects to other static objects.
                        if ((collidableA.isStatic && collidableB.isStatic)) {
                            continue;
                        }

                        positionA = entityA.getActiveComponentByType("position");
                        rigidBodyA = entityA.getActiveComponentByType("rigidBody");

                        positionB = entityB.getActiveComponentByType("position");
                        rigidBodyB = entityB.getActiveComponentByType("rigidBody");

                        if (this.intersects(positionA, rigidBodyA, positionB, rigidBodyB)) {
                            entityIndex = collidableA.collidingEntities.indexOf(entityB);

                            if (entityIndex === -1) {
                                collidableA.collidingEntities.push(entityB);
                            }

                            entityIndex = collidableB.collidingEntities.indexOf(entityA);

                            if (entityIndex === -1) {
                                collidableB.collidingEntities.push(entityA);
                            }
                        }
                    }
                }
            }
        }

    };

    RigidCollisionSystem.prototype.intersects = function(positionA, rigidBodyA, positionB, rigidBodyB) {
        positionA = {
            y: positionA.y + rigidBodyA.offsetY,
            x: positionA.x + rigidBodyA.offsetX
        };

        positionB = {
            y: positionB.y + rigidBodyB.offsetY,
            x: positionB.x + rigidBodyB.offsetX
        };

        var top = Math.max(positionA.y, positionB.y);
        var bottom = Math.min(positionA.y + rigidBodyA.h, positionB.y + rigidBodyB.h);
        var left = Math.max(positionA.x, positionB.x);
        var right = Math.min(positionA.x + rigidBodyA.w, positionB.x + rigidBodyB.w);

        return top < bottom && left < right;
    };

    RigidCollisionSystem.prototype.activate = function(game) {
        this.game = game;
        this.isReady = true;
    };

    RigidCollisionSystem.prototype.update = function() {
        var rootEntity = this.game.world.rootEntity;
        var collidableEntities = rootEntity.getChildrenWithActiveComponentsByTypes(["collidable", "size", "position", "rigidBody"]);
        //var nonStaticCollidables = this.getNonStaticCollidables(collidableEntities);
        var grid = this.sweepAndPrune(collidableEntities);
        this.detectCollisions(grid);
    };

    return RigidCollisionSystem;

});
