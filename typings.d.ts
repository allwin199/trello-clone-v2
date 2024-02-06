type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
    id: TypedColumn
    todos: Todo[]
}

interface Todo {
    $id: string,
    $createdAt: string,
    title: string,
    status: TypedColumn
    image?:string
}

interface Board {
    columns: Map<TypedColumn, Column>
}

