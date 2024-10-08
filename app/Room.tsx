"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import Loader from "@/components/Loader";
import { LiveMap } from "@liveblocks/client";

export function Room({ children }: { children: ReactNode }) {
  return (
      <RoomProvider id="my-room" 
      initialPresence={{
        cursor: null,
        cursorColor: null,
        editingText: null,
        message: null
      }}
      initialStorage={{
        canvasObjects: new LiveMap()
      }}
      >
        <ClientSideSuspense fallback={<Loader/>}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
  );
}