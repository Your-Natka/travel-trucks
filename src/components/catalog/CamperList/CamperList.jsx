import { useSelector } from "react-redux";

import { selectCampers } from "../../../redux/campers/selectors";

import CamperCard from "../CamperCard/CamperCard";

import css from "./CamperList.module.css";

const CamperList = () => {
  const campers = useSelector(selectCampers);

  if (!campers.length) {
    return null;
  }

  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.item}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
