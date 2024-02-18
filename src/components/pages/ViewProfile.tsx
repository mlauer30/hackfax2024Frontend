/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TngWKUalQEw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CardTitle, CardHeader, CardDescription, Card, CardContent } from "@/components/ui/card"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"


export default function ViewProfile() {

  const initialData = {
    "users": [
      {
        "Name": "MARK",
        "Major":"Computer Science",
        "classes": [
          {
            "name": "MATH112",
            "partners": ["MATTHEW"],
            "time": [
              {"start": "13:00", "end": "15:00"}
            ]
          },
          {
            "name": "CS201",
            "partners": [],
            "time": [
              {"start": "10:00", "end": "12:00"},
              {"start": "14:00", "end": "16:00"}
            ]
          },
          {
            "name": "PY101",
            "partners": ["SARA", "JOHN"],
            "time": [
              {"start": "9:00", "end": "11:00"},
              {"start": "15:00", "end": "17:00"}
            ]
          }
        ]
      },
      {
        "Name": "JENNY",
        "Major":"Mathematics",
        "classes": [
          {
            "name": "MATH112",
            "partners": ["EMMA"],
            "time": [
              {"start": "13:00", "end": "15:00"}
            ]
          },
          {
            "name": "CS201",
            "partners": ["SAM"],
            "time": [
              {"start": "10:00", "end": "12:00"},
              {"start": "14:00", "end": "16:00"}
            ]
          },
          {
            "name": "PY101",
            "partners": ["SARA"],
            "time": [
              {"start": "9:00", "end": "11:00"},
              {"start": "15:00", "end": "17:00"}
            ]
          }
        ]
      }
    ]
  };
  const cards = [
    { title: 'Partner 1 | Course Name', content: 'Availability, Major' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    // Add more card data as needed
  ];

  
  const [processedData] = useState(() => {
    return initialData.users.map(user => {
      const userName = user.Name;
      const userMajor = user.Major;
      const classes = user.classes.map(classItem => {
        const className = classItem.name;
        const partners = classItem.partners.join(', ');
        const timeSlots = classItem.time.map((session, index) => (
          <span key={index}>{session.start} - {session.end}<br /></span>
        ));

        return (
          <>
           <div key={className}>
            <h3>{className}</h3>
            <p><strong>Partners:</strong> {partners}</p>
            <p><strong>Time:</strong><br /> {timeSlots}</p>
          </div>
          </>
        );
      });

      return (
        <div key={userName}>
          <h2>{userName}</h2>
          <h4>Major: {userMajor}</h4>
          {classes}
        </div>
      );
    });
  });
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      {/* <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
        </Menubar> */}
        {/* <div className="mb-4 flex items-center">
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" 
          href="/examples/mail">Mail</a>
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary" href="/examples/dashboard">Dashboard</a>
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/cards">Cards</a>
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/tasks">Tasks</a>
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/playground">Playground</a>
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/forms">Forms</a>
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/music">Music</a>
          <a className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground" href="/examples/authentication">Authentication</a></div> */}
         <Tabs className="flex items-center gap-5 text-sm lg:gap-6" defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="study-buddies">Study Buddies</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
       
              <span className="sr-only">Acme Inc</span>
           
          </TabsContent>
          <TabsContent value="study-buddies">
            
          search forpeople..
            
          </TabsContent>
          <TabsContent value="messages">
            
              
          Messages
          </TabsContent>
          <TabsContent value="settings">
           Settings
              
            
          </TabsContent>
        </Tabs>
        
       
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="https://ui.shadcn.com/avatars/04.png"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="flex items-center gap-4">
          <img
            alt="Avatar"
            className="rounded-full border"
            height="100"
            src="https://ui.shadcn.com/avatars/04.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold">Alice Johnson</h1>
            <p className="text-gray-500 dark:text-gray-400">Studying Computer Science at GMU</p>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            {/* <CardHeader className="flex flex-row items-center gap-4">
              <UsersIcon className="w-8 h-8" />
              <CardTitle>My Study Buddies</CardTitle>
            </CardHeader> */}
            <CardContent className="grid gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    alt="Avatar"
                    className="rounded-full border"
                    height="50"
                    src="https://ui.shadcn.com/avatars/03.png"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <div className="grid gap-1">
                    <CardTitle>John Smith</CardTitle>
                    <CardDescription>Studying Physics</CardDescription>
                  </div>
                  <Button className="ml-auto rounded-full" size="icon">
                    <MessageSquareIcon className="w-6 h-6" />
                    <span className="sr-only">Message</span>
                  </Button>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    alt="Avatar"
                    className="rounded-full border"
                    height="50"
                    src="https://ui.shadcn.com/avatars/04.png"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <div className="grid gap-1">
                    <CardTitle>Sarah Johnson</CardTitle>
                    <CardDescription>Studying Biology</CardDescription>
                  </div>
                  <Button className="ml-auto rounded-full" size="icon">
                    <MessageSquareIcon className="w-6 h-6" />
                    <span className="sr-only">Message</span>
                  </Button>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    alt="Avatar"
                    className="rounded-full border"
                    height="50"
                    src="https://ui.shadcn.com/avatars/04.png"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <div className="grid gap-1">
                    <CardTitle>Emily Brown</CardTitle>
                    <CardDescription>Studying Literature</CardDescription>
                  </div>
                  <Button className="ml-auto rounded-full" size="icon">
                    <MessageSquareIcon className="w-6 h-6" />
                    <span className="sr-only">Message</span>
                  </Button>
                </CardHeader>
              </Card>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <ActivityIcon className="w-8 h-8" />
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-sm">
                <BookOpenIcon className="w-4 h-4" />
                <span>Studied Advanced Math for 2 hours</span>
                <span className="text-gray-500 dark:text-gray-400">2h ago</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <BookOpenIcon className="w-4 h-4" />
                <span>Studied Physics for 1 hour</span>
                <span className="text-gray-500 dark:text-gray-400">1 day ago</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <BookOpenIcon className="w-4 h-4" />
                <span>Studied Literature for 3 hours</span>
                <span className="text-gray-500 dark:text-gray-400">3 days ago</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BookIcon className="w-8 h-8" />
              <CardTitle>My Courses</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <UsersIcon className="w-8 h-8" />
                  <CardTitle>Study Group</CardTitle>
                </CardHeader>
                <CardDescription>With John, Sarah, and Emily</CardDescription>
                <Button className="ml-auto rounded-full" size="icon">
                  <VideoIcon className="w-6 h-6" />
                  <span className="sr-only">Join Video Call</span>
                </Button>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <UsersIcon className="w-8 h-8" />
                  <CardTitle>Physics 101</CardTitle>
                </CardHeader>
                <CardDescription>With Professor Smith</CardDescription>
                <Button className="ml-auto rounded-full" size="icon">
                  <VideoIcon className="w-6 h-6" />
                  <span className="sr-only">Join Video Call</span>
                </Button>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <UsersIcon className="w-8 h-8" />
                  <CardTitle>Mathematics Masterclass</CardTitle>
                </CardHeader>
                <CardDescription>With Professor Johnson</CardDescription>
                <Button className="ml-auto rounded-full" size="icon">
                  <VideoIcon className="w-6 h-6" />
                  <span className="sr-only">Join Video Call</span>
                </Button>
              </Card>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function ActivityIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function BookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BookOpenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function MessageSquareIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}


function Package2Icon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function VideoIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
