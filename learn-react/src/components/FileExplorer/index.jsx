import React, { useEffect, useState } from "react";
import jsonData from "./data.json";
import "./style.css";

function Folder({ folder, onDelete }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      {folder.isFolder && (
        <>
          <span onClick={toggleFolder} style={{ cursor: "pointer" }}>
            {isOpen ? "-" : "+"} {folder.name}
          </span>
          &nbsp;
          <button onClick={() => onDelete(folder.id)}>x</button>
          {isOpen && folder.child && (
            <ul>
              {folder.child.map((child) => (
                <Folder key={child.id} folder={child} onDelete={onDelete} />
              ))}
            </ul>
          )}
        </>
      )}
      {!folder.isFolder && (
        <>
          <span>{folder.name}</span>
          &nbsp;
          <button onClick={() => onDelete(folder.id)}>x</button>
        </>
      )}
    </li>
  );
}

function FileExplorer() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    setFolders(jsonData);
  }, []);

  const deleteFolderOrFile = (id) => {
    const deleteItem = (items, id) => {
      return items
        .filter((item) => item.id !== id)
        .map((item) => {
          if (item.child) {
            item.child = deleteItem(item.child, id);
          }
          return item;
        });
    };

    setFolders((prevFolders) => deleteItem(prevFolders, id));
  };

  return (
    <div className="folder">
      <ul>
        {folders.map((folder) => (
          <Folder
            key={folder.id}
            folder={folder}
            onDelete={deleteFolderOrFile}
          />
        ))}
      </ul>
    </div>
  );
}

export default FileExplorer;
