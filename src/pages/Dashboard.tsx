import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Dashboard() {
  console.log("Dashboard rendered");
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
    // if (count % 2) {
    //   setMean(mean + 1);
    // }
  };
  //const currentTime = useMemo(() => new Date().getMilliseconds(), [mean]);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        quisquam commodi, sed quo itaque modi error, voluptatem enim temporibus
        iusto laboriosam minus pariatur nostrum excepturi, dolor praesentium!
        Velit, sunt modi!
      </p>
      <h2 className="text-2xl font-bold mt-5 mb-5">Next steps</h2>
      <div className="flex flex-wrap gap-6">
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This tutorial gets you started with Clerk's component, which uses
              the Account Portal. If you don't want to use the Account Portal,
              read this guide about creating a custom authentication page.
            </p>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button>Default</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This tutorial gets you started with Clerk's component, which uses
              the Account Portal. If you don't want to use the Account Portal,
              read this guide about creating a custom authentication page.
            </p>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button>Default</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This tutorial gets you started with Clerk's component, which uses
              the Account Portal. If you don't want to use the Account Portal,
              read this guide about creating a custom authentication page.
            </p>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button>Default</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This tutorial gets you started with Clerk's component, which uses
              the Account Portal. If you don't want to use the Account Portal,
              read this guide about creating a custom authentication page.
            </p>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button>Default</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This tutorial gets you started with Clerk's component, which uses
              the Account Portal. If you don't want to use the Account Portal,
              read this guide about creating a custom authentication page.
            </p>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button>Default</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This tutorial gets you started with Clerk's component, which uses
              the Account Portal. If you don't want to use the Account Portal,
              read this guide about creating a custom authentication page.
            </p>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button>Default</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This tutorial gets you started with Clerk's component, which uses
              the Account Portal. If you don't want to use the Account Portal,
              read this guide about creating a custom authentication page.
            </p>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button>Default</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
        <Card className="flex-1/4 max-w-96 shadow-none justify-between py-4">
          <CardHeader>
            <CardTitle>Create a custom sign-in or sign-up</CardTitle>
          </CardHeader>
          <CardContent>
            <div>Count: {count}</div>
          </CardContent>
          <CardFooter className="space-x-2 justify-end">
            <Button onClick={handleClick}>useMemo</Button>
            <Button variant={"outline"}>Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
