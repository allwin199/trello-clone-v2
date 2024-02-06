"use client";

import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useBoardStore } from "../../store/BoardStore";
import Column from "./Column";

const Board = () => {
    const [board, getBoard] = useBoardStore((state) => [
        state.board,
        state.getBoard,
    ]);

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    // console.log("Board", board);

    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source, type } = result;

        if (!destination) {
            return;
        }

        const columns = Array.from(board.columns);
        const startColIndex = columns[Number(source.droppableId)];
        const finishedColIndex = columns[Number(destination.droppableId)];

        const startCol: Column = {
            id: startColIndex[0],
            todos: startColIndex[1].todos,
        };

        const finishedCol: Column = {
            id: startColIndex[0],
            todos: startColIndex[1].todos,
        };

        if (!startCol || !finishedCol) {
            return;
        }

        if (source.index === destination.index && startCol === finishedCol) {
            return;
        }

        const newTodos = startCol.todos;
        const [todoMoved] = newTodos.splice(source.index, 1);

        if (startCol.id == finishedCol.id) {
            newTodos.splice(source.index, 0, todoMoved);
            const newCol = {
                id: startCol.id,
                todos: newTodos,
            };
            const newColumns = new Map(board.columns);
            newColumns.set(startCol.id, newCol);
        } else {
        }
    };

    return (
        <div className="mt-10">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable
                    droppableId="board"
                    direction="horizontal"
                    type="column"
                >
                    {(provided) => (
                        <div
                            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {Array.from(board.columns.entries()).map(
                                ([id, column], index) => (
                                    <Column
                                        key={id}
                                        id={id}
                                        todos={column.todos}
                                        index={index}
                                    />
                                )
                            )}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Board;
