import * as React from "react";

import { MessageCircle } from "lucide-react";

const router: {
  label: string;
  link: string;
  icon: React.ComponentType;
}[] = [
  {
    label: "Submited Game",
    link: "/admin",
    icon: MessageCircle,
  },
];

export default router;
