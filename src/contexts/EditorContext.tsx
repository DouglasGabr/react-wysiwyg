import React, { createContext, useContext } from "react";

export type EditorContextType = {};

const EditorContext = createContext<EditorContextType>({});

export function EditorContextProvider({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return <EditorContext.Provider value={{}}>{children}</EditorContext.Provider>;
}

export function useEditorContext(): EditorContextType {
  return useContext(EditorContext);
}
