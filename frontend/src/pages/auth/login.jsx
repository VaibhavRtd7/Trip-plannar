import React from "react";
import { Tabs, Tab, Input, Button, Card, CardBody } from "@nextui-org/react";

const Login = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

const Signup = () => {
    
  return (
    <div className="flex flex-col gap-4 h-[300px]">
      <Input
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="password"
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default function App() {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="flex flex-col w-full items-center py-20">
      <Card className="max-w-full w-[340px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <Login />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <Signup />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
