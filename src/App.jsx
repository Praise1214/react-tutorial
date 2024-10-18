import { UserProfile } from "./components/studentProfile"

export default function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <UserProfile
                studentname = "bob"
                age={20}
                favoriteLecturer = {[
                    {
                        name1: "Owojori",
                        id: "control"
                        
                    },

                    {
                        name2: "Ibukun",
                        id: "communication"
                    }
                ]}
                />
                
        </div>
    )
}