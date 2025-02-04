import { createStore } from 'stan-js'

export const { useStore, reset, getState, actions } = createStore({
    counter: 0,
    message: 'Hello, Stan!',
    get upperCaseMessage() {
        return this.message.toUpperCase()
    },
    currentTime: new Date(),
    users: [] as Array<string>,
})

setInterval(() => {
    actions.setCurrentTime(new Date())
}, 1000)

export const fetchUsers = async () => {
    try {
        const res = await fetch('https://randommer.io/Name', {
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: 'type=firstname&number=20',
            method: 'POST',
        })
        const data = await res.json()

        return data as Array<string>
    } catch {
        return []
    }
}
