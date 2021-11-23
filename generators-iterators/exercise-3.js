let todoList = {
    todoItems: [],
    addItem( description ) {
        this.todoItems.push( { description, done: false } );
        return this;
    },
    crossOutItem( index ) {
        if ( index < this.todoItems.length ) {
            this.todoItems[index].done = true;
        }
        return this;
    }
};

todoList.addItem( 'task 1' ).addItem( 'task 2' ).crossOutItem( 0 );
let iterableTodoList = todoList.todoItems[Symbol.iterator]();
for ( let item of iterableTodoList ) {
    console.log( item );
}