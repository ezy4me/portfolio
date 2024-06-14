import React from "react";
import {
  FaHome,
  FaUser,
  FaMailBulk,
  FaBook,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-menu__content">
        <button className="burger-menu__close" onClick={onClose}>
          &times;
        </button>
        <div className="burger-menu__profile">
          <div className="profile__image">
            <img src="/avatar.png" alt="profile" />
          </div>
          <div className="burger-menu__body">
            <p className="profile__name">Maximov Roman</p>

            <div className="profile__socials">
              <a href="https://t.me/sadwoe" className="profile__social-link">
                <FaTelegram />
              </a>
              <a
                href="https://github.com/ezy4me"
                className="profile__social-link">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <ul className="burger-menu__list">
          <li
            className={`burger-menu__item ${
              currentPath === "/" ? "burger-menu__item--active" : ""
            }`}>
            <Link to="/" className="burger-menu__link">
              <FaHome className="burger-menu__icon" />
              <span className="burger-menu__text">Home</span>
            </Link>
          </li>
          <li
            className={`burger-menu__item ${
              currentPath === "/about" ? "burger-menu__item--active" : ""
            }`}>
            <Link to="/about" className="burger-menu__link">
              <FaUser className="burger-menu__icon" />
              <span className="burger-menu__text">About</span>
            </Link>
          </li>
          <li
            className={`burger-menu__item ${
              currentPath === "/contact" ? "burger-menu__item--active" : ""
            }`}>
            <Link to="/contact" className="burger-menu__link">
              <FaMailBulk className="burger-menu__icon" />
              <span className="burger-menu__text">Contact</span>
            </Link>
          </li>
          <li
            className={`burger-menu__item ${
              currentPath === "/projects" ? "burger-menu__item--active" : ""
            }`}>
            <Link to="/projects" className="burger-menu__link">
              <FaBook className="burger-menu__icon" />
              <span className="burger-menu__text">Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
