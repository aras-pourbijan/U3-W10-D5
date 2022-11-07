import { Itodo } from "./itodo.interface";



export class Todo implements Itodo {

    id: number = 0;
    title?: string;
    completed: boolean = false
    constructor(title: string) {
        this.title = title
    }

}
