export class Button {
    label = 'default'
    button!: HTMLButtonElement; // Add the 'button' property

    onClick() {
        // Add your onClick logic here
        throw new Error("implement on click");
    }

    appendTo(element: any) {
        this.button = document.createElement('button');
        this.button.innerText = this.label;
        this.button.addEventListener('click', this.onClick.bind(this))
        element.appendChild(this.button)
        this.onMounted()
    }

    active(enabled: boolean) {
        if (enabled) {
                this.button.classList.add('active')
        } else {
                this.button.classList.remove('active')
        }
    }

    protected onMounted() {
        // Add your onMounted logic here
    }
}