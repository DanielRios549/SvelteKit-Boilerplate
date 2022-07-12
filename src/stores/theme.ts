import { get } from 'svelte/store'
import { savable } from '$/lib/store'

export const themes = ['light', 'dark']
export const theme = savable<string>('theme', themes[0], true)

export const handleTheme = (event: any) => {
    const newTheme = event.target.value

    document.body.classList.replace(get(theme), newTheme)
    theme.set(newTheme)
}
