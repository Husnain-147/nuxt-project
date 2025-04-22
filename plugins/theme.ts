import defaultTheme from '~/assets/default-theme.json'

export default defineNuxtPlugin({
  name: 'theme-plugin',
  enforce: 'pre', // Make sure this runs early

  setup() {
    // Makes theme available in the app
    const themeData = ref(defaultTheme)

    // Function to load a specific theme
    const loadTheme = async (themeName = 'default') => {
      try {
        // In production, we could load this dynamically based on tenant/client
        // const response = await fetch(`/api/themes/${themeName}.json`)
        // const theme = await response.json()
        // themeData.value = theme

        // For now, just use the default theme
        applyTheme(defaultTheme)
      } catch (error) {
        console.error('Failed to load theme:', error)
        // Fallback to default theme
        applyTheme(defaultTheme)
      }
    }

    // Function to apply theme to CSS variables
    const applyTheme = (theme: any) => {
      if (import.meta.client) {
        for (const key in theme) {
          document.documentElement.style.setProperty(`--${key}`, theme[key])
        }
      }
    }

    loadTheme()

    return {
      provide: {
        theme: themeData,
      },
    }
  },
})
