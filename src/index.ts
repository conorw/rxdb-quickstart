import {
    ensureNotFalsy,
    randomCouchString
} from 'rxdb/plugins/core';
import {
    RxTodoDocument,
    databasePromise
} from './database.js';
import './style.css';

(async () => {
    const database = await databasePromise;

    // update url in description text
    ensureNotFalsy(document.getElementById('copy-url')).innerHTML = window.location.href;

    // render reactive todo list
    const $todoList = ensureNotFalsy(document.getElementById('todo-list'));
    database.todos.find({
        sort: [
            { state: 'desc' },
            { lastChange: 'desc' }
        ]
    }).$.subscribe(todos => {
        $todoList.innerHTML = '';
        todos.forEach(todo => $todoList.append(getHtmlByTodo(todo)));
    });

    // event: add todo
    const $insertInput = ensureNotFalsy(document.getElementById('insert-todo')) as HTMLInputElement;
    $insertInput.onkeydown = async (event) => {
        alert('event code: ' + event.code + ' kleycode ' + event.keyCode);
        if (
            isEnterEvent(event) &&
            $insertInput.value.length > 0
        ) {
            await database.todos.insert({
                id: randomCouchString(10),
                name: $insertInput.value,
                state: 'open',
                lastChange: Date.now()
            });
            $insertInput.value = '';
        }
    }

    // event: clear completed
    const $clearCompletedButton = ensureNotFalsy(document.getElementById('clear-completed'));
    $clearCompletedButton.onclick = () => database.todos.find({ selector: { state: 'done' } }).remove();
})();

const escapeForHTML = (s: string) => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');
const isEnterEvent = (ev: KeyboardEvent) => ev.code === 'Enter' || ev.keyCode === 13;
function getHtmlByTodo(todo: RxTodoDocument): HTMLLIElement {
    const $liElement = document.createElement('li');
    const $viewDiv = document.createElement('div');
    const $checkbox = document.createElement('input');
    const $label = document.createElement('label');
    const $deleteButton = document.createElement('button');
    $liElement.append($viewDiv);
    $viewDiv.append($checkbox);
    $viewDiv.append($label);
    $viewDiv.append($deleteButton);

    // event: toggle todo state
    $checkbox.onclick = () => todo.incrementalPatch({ state: todo.state === 'done' ? 'open' : 'done' });
    $checkbox.type = 'checkbox';
    $checkbox.classList.add('toggle');

    // event: change todo name
    $label.contentEditable = 'true';
    $label.onkeyup = async (ev) => {
        if (isEnterEvent(ev)) {
            const newName = $label.innerHTML.replace(/<br>/g, '').replace(/\&nbsp;/g, ' ').trim();
            await todo.incrementalPatch({ name: newName });
        }
    }
    $label.innerHTML = escapeForHTML(todo.name);

    // event: delete todo
    $deleteButton.classList.add('destroy');
    $deleteButton.onclick = () => todo.remove();

    if (todo.state === 'done') {
        $liElement.classList.add('completed');
        $checkbox.checked = true;
    }

    return $liElement;
}
