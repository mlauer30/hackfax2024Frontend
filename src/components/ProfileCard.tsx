import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
// import "./App.css"

export default function App() {
  return (
    <Card className="w-full max-w-6xl">
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-col gap-1.5">
          <CardTitle className="text-3xl">Study Buddy Matches</CardTitle>
          <CardDescription>
            Connect with potential study buddies who share your interests and study goals.
          </CardDescription>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="flex items-center gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage alt="User" src="/placeholder-user.jpg" />
                <AvatarFallback className="border">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle>Julia Doe</CardTitle>
                <CardDescription>
                  Enthusiastic learner interested in computer science and looking for a study buddy to explore coding
                  projects together.
                </CardDescription>
              </div>
              <Button size="sm">Connect</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage alt="User" src="/placeholder-user.jpg" />
                <AvatarFallback className="border">AW</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle>Amy Watson</CardTitle>
                <CardDescription>
                  Passionate about literature and seeking a study partner to discuss books and improve analytical
                  skills.
                </CardDescription>
              </div>
              <Button size="sm">Connect</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage alt="User" src="/placeholder-user.jpg" />
                <AvatarFallback className="border">SS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle>Sara Smith</CardTitle>
                <CardDescription>
                  Interested in history and looking for a study buddy to prepare for exams and engage in historical
                  discussions.
                </CardDescription>
              </div>
              <Button size="sm">Connect</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <Avatar className="border w-12 h-12">
                <AvatarImage alt="User" src="/placeholder-user.jpg" />
                <AvatarFallback className="border">MM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle>Mark Miller</CardTitle>
                <CardDescription>
                  Science enthusiast interested in physics and seeking a study partner to solve problems and conduct
                  experiments.
                </CardDescription>
              </div>
              <Button size="sm">Connect</Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}