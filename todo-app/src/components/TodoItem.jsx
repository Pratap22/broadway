import circle from "../assets/circle.png";
import check from "../assets/check.png";
import deleteIcon from "../assets/delete.png";

const TodoItem = ({ checked, text, onToggle, onDelete, onRowClick }) => {
  return (
    <div className="pb-2">
      <div className="flex items-center">
        <img
          className="w-1/12 p-4"
          alt="circle"
          src={checked ? check : circle}
          onClick={onToggle}
        />
        <p
          className={`w-10/12 align-middle text-3xl text-app-fade ${
            checked ? "line-through" : ""
          }`}
          onClick={onRowClick}
        >
          {text}
        </p>
        <img
          className="p-4"
          height={64}
          width={64}
          alt="circle"
          src={deleteIcon}
          onClick={onDelete}
        />
      </div>
      <div className="border-2 border-app-blue mx-12" />
    </div>
  );
};

export default TodoItem;
