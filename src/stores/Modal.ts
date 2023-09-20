export class Modal {
    private open: boolean = false;
    constructor() {
    }
    public setOpen() {
        return this.open = !this.open;
    }
    public get getOpen() {
        return this.open;
    }
}