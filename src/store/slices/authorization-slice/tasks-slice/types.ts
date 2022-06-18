export interface ITask {
        id:string,
        title:string,
        done:boolean
}

export interface ItasksState {
    titleInput:string,
    tasks:ITask[]
}