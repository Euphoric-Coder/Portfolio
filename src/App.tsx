import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core"
import HomePage from "./components/HomePage"

const App = () => {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  )
}

export default App