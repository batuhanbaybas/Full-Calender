import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
let id = 1;


export default class Calendar extends Component {
    state = {
        currentEvent: []
    }
  render() {
     
    return (
      <div>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
            bootstrapPlugin,
          ]}
          headerToolbar={{
            left: "prev next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          selectable={true}
          select={this.HandleDateSelect}
          eventClick={this.eventClickHandler}
          eventsSet ={this.eventSetHandler}
          themeSystem="bootstrap"
          initialView="timeGridWeek"
          dayMaxEvents={true}
          editable={true}
        />
      </div>
    );
  }
  HandleDateSelect = (eventAdd) => {
    let title = prompt("Lütfen Bir Başlık Giriniz");
    let calender = eventAdd.view.calendar;

    if (title) {
      calender.addEvent({
        id: id,
        title: title,
        start: eventAdd.startStr,
        end: eventAdd.endStr,
        allDay: eventAdd.allDay,
      });
      id++;
    }
  };
 
eventSetHandler = (events) =>{
    this.setState({
        currentEvent:events
    })
  
}
  eventClickHandler = (removeEvent) => {
    let event = removeEvent.event;
    event.remove();
  };
}
