import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { TieredMenu } from "primereact/tieredmenu";
import { PrimeIcons } from "primereact/api";
import { MenuContainer } from "../../component/MenuContainer";

export const Header = () => {
  const menu = useRef(null);
  const [isMenu, setIsMenu] = useState(false);
  const items = [
    {
      label: "File",
      icon: "pi pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
          items: [
            {
              label: "Document",
              icon: "pi pi-file",
            },
            {
              label: "Image",
              icon: "pi pi-image",
            },
            {
              label: "Video",
              icon: "pi pi-video",
            },
          ],
        },
        {
          label: "Open",
          icon: "pi pi-folder-open",
        },
        {
          label: "Print",
          icon: "pi pi-print",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-file-edit",
      items: [
        {
          label: "Copy",
          icon: "pi pi-copy",
        },
        {
          label: "Delete",
          icon: "pi pi-times",
        },
      ],
    },
    {
      label: "Search",
      icon: "pi pi-search",
    },
    {
      separator: true,
    },
    {
      label: "Share",
      icon: "pi pi-share-alt",
      items: [
        {
          label: "Slack",
          icon: "pi pi-slack",
        },
        {
          label: "Whatsapp",
          icon: "pi pi-whatsapp",
        },
      ],
    },
  ];

  return (
    <>
      <section className="">
        <div className="grid">
          <div className="md: col-6">
            <Button
              icon="pi pi-align-justify"
              onClick={(e) => setIsMenu(!isMenu)}
            />
            
          </div>
        </div>
        {isMenu && <MenuContainer />}
      </section>
    </>
  );
};
