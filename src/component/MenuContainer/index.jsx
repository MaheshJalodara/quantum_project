import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { menuItem } from "../../assets/config";
import { ListBox } from "primereact/listbox";

export const MenuContainer = () => {
  const menu = useRef(null);

  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    console.log(selectedMenu);
  }, selectedMenu);

  return (
    <>
      <div className="grid col-12">
        <div className="col">
          <div className="p-3">
            {/* {menuItem.map((item) => item.label)} */}

            <ListBox
              value={selectedMenu}
              onChange={(e) => setSelectedMenu(e.value)}
              options={menuItem}
              optionLabel="label"
              className="w-full"
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3">
            {selectedMenu && (
              <ListBox
                value={selectedMenu}
                onChange={(e) => setSelectedMenu(e.value)}
                options={selectedMenu?.items}
                optionLabel="label"
                className="w-full"
              />
            )}
          </div>
        </div>
        <div className="col">
          <div className="text-center p-3 border-round-sm bg-primary font-bold ">
            Add
          </div>
        </div>
      </div>
    </>
  );
};
