"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
import {
    DraggableProvidedDragHandleProps,
    DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({
    todo,
    id,
    index,
    innerRef,
    draggableProps,
    dragHandleProps,
}: Props) => {
    return (
        <div
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
            className="bg-white rounded-md space-y-2 drop-shadow-md mt-4"
        >
            <div className="flex justify-between text-sm items-center p-3">
                <p>{todo.title}</p>
                <button className="text-red-500 hover:text-red-600">
                    <XCircleIcon className="ml-5 h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default TodoCard;
