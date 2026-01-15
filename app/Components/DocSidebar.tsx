import { ReactElement } from "react";

type DocSidebarProps = {
  children: ReactElement[];
};

type DocSidebarItemProps = {
  children: ReactElement;
};

export function DocSidebar({ children }: DocSidebarProps) {
  return (
    <div className="col col--3">
      <div className="table-of-contents thin-scrollbar">
        <div className="table-of-contents__inner">{children}</div>
      </div>
    </div>
  );
}

export function DocSidebarItem({ children }: DocSidebarItemProps) {
  return <>{children}</>;
}

export function DocSidebarHeading({ text }: { text: string }) {
  return (
    <>
      <h4>{text}</h4>
    </>
  );
}
