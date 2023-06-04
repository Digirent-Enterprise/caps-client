import { useState, Fragment, useEffect } from "react";

import { Dialog, Combobox, Transition } from "@headlessui/react";
import Fuse from "fuse.js";

import CommandGroup from "@/shared/command-palette/command-group";
import { commands } from "@/shared/command-palette/command-group/constant";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const fuse = new Fuse(commands, { includeScore: true, keys: ["name"] });

  const filteredCommands =
    query === ""
      ? commands
      : fuse.search(query).map((res) => ({ ...res.item }));

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <Transition.Root show={isOpen}>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 overflow-y-auto p-4 pt-[15vh]"
      >
        <Dialog.Overlay className="fixed inset-0 backdrop-blur-[1px]" />
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          // afterLeave={() => {console.log("leaving...")}}
        >
          <Combobox
            as="div"
            className="relative mx-auto flex max-w-2xl flex-col rounded-lg bg-accent-dark shadow-2xl"
            onChange={(command) => {
              setIsOpen(false);
            }}
          >
            <div className="mx-4 mt-4 flex h-[25px] shrink-0 items-center self-start rounded bg-primary/30 px-2 text-xs text-slate-100">
              DICA
            </div>
            <div className="flex items-center border-b border-slate-500 text-lg font-medium">
              <Combobox.Input
                className="w-full border-0 bg-transparent p-5 text-white outline-none placeholder:text-gray-200"
                placeholder="Type a command or search..."
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <Combobox.Options
              className="flex max-h-72 flex-col overflow-y-auto"
              static
            >
              <CommandGroup commands={filteredCommands} group="Conversation" />
              <CommandGroup commands={filteredCommands} group="Navigation" />
              <CommandGroup commands={filteredCommands} group="Settings" />
              <CommandGroup commands={filteredCommands} group="Account" />
            </Combobox.Options>
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

Component.displayName = "CommandPalette";
export default Component;
