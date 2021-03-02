import React, { Component } from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interectionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import Swal from "sweetalert2";
import "../App.css";

class Calendar extends Component {
  state = {
    currenEvent: [],
  };
  render() {
    return (
      <div className="demo-app-main">
        <FullCalender
          locale="tr"
          plugins={[
            dayGridPlugin,
            interectionPlugin,
            timeGridPlugin,
            bootstrapPlugin,
          ]}
          headerToolbar={{
            left: "prev today next",
            center: "title",
            right: "dayGridMonth timeGridWeek",
          }}
          buttonText={{
            month: "Ay",
            week: "Hafta",
            today: "Bugün",
          }}
          themeSystem="bootstrap"
          initialView="dayGridMonth"
          select={this.handleDateClick}
          eventClick={this.handleEventClick}
          eventsSet={this.eventHandle}
          initialEvents={this.state.currenEvent}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
        />
      </div>
    );
  }
  handleDateClick = async (arg) => {
    let calendarApi = arg.view.calendar;

    await Swal.fire({
      title: "Bir Görev Giriniz",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Kayıt",
      cancelButtonText: "İptal",
    }).then((res) => {
      if (res.value) {
        calendarApi.addEvent({
          id: new Date().getTime(),
          title: res.value,
          start: arg.startStr,
          end: arg.endStr,
          allDay: arg.allDay,
        });
      }
    });
    
  };
  handleEventClick = async (arg) => {
    let removedEvent = arg.event.title;
    if (removedEvent) {
      await Swal.fire({
        icon: "question",
        title: removedEvent,
        text: "Silinecek Emin misin?",
        showDenyButton: true,
        confirmButtonText:"Düzenle" ,
        denyButtonText:"Sil"
      }).then((res) => {
        if (res.isDenied) {
          arg.event.remove();
        // }else if(res.isConfirmed){
        //  this.state.currenEvent.map(e=>e.id===arg.event.id)
        //  Swal.fire({
        //   title: "Yeni Görevi Giriniz",
        //   input: "text",
        //   confirmButtonText: "Kayıt",
          
        // }).then(res=>{
        //   if (res.value) {
        //     arg.event.id = (new Date()).getTime()
        //     arg.event.title = res.value
        //   }
        // })
        }
      });
    }
  };
  eventHandle = (event) => {
    this.setState({
      currenEvent: event,
    });
  };
}

export default Calendar;
