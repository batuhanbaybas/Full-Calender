import React, { Component } from "react";
import "../App.css";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>Kullanım</h2>
          <ul>
            <li>
              Bir tarih seçin ve tıklayın oluşturmak istediğiniz event i girin
            </li>
            <li>
              Eventlerinizi sürükleyerek farklı tarihlere kaydırabilirsiniz
            </li>
            <li>
              Oluşturduğunuz event i silmek için eventin üstüne
              tıklayın
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
