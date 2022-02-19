import { Component, OnInit, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Event } from '../models/event.model';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  event: any;
}

export interface EventDay {
  date: string;
  events: Event[];
}

@Component({
  selector: 'app-list-available-events',
  templateUrl: './list-available-events.component.html',
  styleUrls: ['./list-available-events.component.css']
})
export class ListAvailableEventsComponent {

  agenda: EventDay[] = [
    {
        date: "19.10 (wtorek)",
        events: [
          { date: "19.10 (wtorek)", time: "09:30 - 11:00", title: "Uroczyste otwarcie", description: "Wykład otwierający - Horyzonty AI" },
          { date: "19.10 (wtorek)", time: "11:30 - 12:00", title: "AI (Artificial Intelligence) - Wpływ sztucznej inteligencji", description: "Poznaj nowoczesne zastosowania z obszaru AI, nad którymi specjaliści Fujitsu pracują na co dzień oraz przykłady gdzie sztuczna inteligencja wpływa na nasze codzienne życie" },
          { date: "19.10 (wtorek)", time: "12:30 - 13:00", title: "Automatyczne wykrywanie chorób z użyciem chmury obliczeniowej - praktyczne zastosowania Machine Learning", description: "Sztuczna Inteligencja (Artificial lnelligence, Al) naśladująca ludzkie funkcje poznawcze zrewolucjonizowała wiele  branż, w tym medycynę. Prelekcja prezentuje rezultaty pracy nad projektem systemu Automatycznego Wykrywania  Chorób, stworzonego z wykorzystaniem Azure CognitiveServices, jako praktycznego zastosowania Machine Learning i  Cloud Computing. "},
          { date: "19.10 (wtorek)", time: "13:30 - 14:00", title: "Rodzaje i pokaz ataków na sieci informatyczne", description: "W czasie prelekcji zostanie omówionych kilka obecnie najczęściej występujących ataków na sieci IT Ponadto będzie pokazana symulacja niektórych z nich — z użyciem ogólnie dostępnych metod i narzędzi, tak by słuchaczom dać obraz możliwego do wystąpienia ryzyka i nieskomplikowanego przeprowadzenia ataku. "},
          { date: "19.10 (wtorek)", time: "14:30 - 15:00", title: "Co każdy programista Java o komunikacji z bazą danych wiedzieć musi ", description: "W dzisiejszych czasach programiści Java dostają do ręki co najmniej kilka framework'ów, które zdejmują z nich odpowiedzialność za implementację komunikacji z bazą danych, obsługę transakcji czy inne mniej lub bardziej złożone operacje. Korzystanie z rozwiązań typu 'Black-Box• powoduje, że często zapominamy co faktycznie dzieje się za kulisami naszych rozwiązań. Wykład ma na celu przypomnienie najważniejszych zagadnień z zakresu komunikacji aplikacji Java z bazami danych, omówienie najczęściej popełnianych błędów wraz ze sposobem ich uniknięcia. "},
          { date: "19.10 (wtorek)", time: "15:30 - 16:00", title: "Z piwnicy do chmury: Serverless computing w Azure", description: "Serverless - Słyszeliście o czymś takim? Jeśli nie, to usłyszycie. To podejście szturmem zdobywa coraz większą popularność w wielu firmach IT " }
        ]
    },
    {
      date: "20.10 (środa)",
      events: [
        { date: "20.10 (środa)", time: "09:30 - 11:00", title: "Od studenta do DevOpsa w niecały rok", description:  "Warsztat w formie live demo prezentuje jak w prosty sposób moża wystawić testowy serwis J2EE w środowisku dockerowym. Uczestnicy zapoznaja się z działaniem silnika dockera oraz poznają best practice dla podobnych instalacji ze szczegolnym naciskiem na dokumentacje projektową. "},
        { date: "20.10 (środa)", time: "11:30 - 12:00", title: "środowe Targi IT", description:  "Spotkania z rekruterami, warsztaty, prezentacje firmy"},
        { date: "20.10 (środa)", time: "12:30 - 13:00", title: "Kotlin Back-end Developer", description:  "Głównym celem warsztatów będzie pokazanie Kotlina jako zgrabniejszej alternatywy dla Javy i szybszego w kompilacji języka niż Scala. W czasie warsztatu zrefaktorujemy przykładową Rest APi napisaną w Javie na Kotlin. Porównane zostaną również możliwość jakie dają developerowi Java i Kotlin. "},
        { date: "20.10 (środa)", time: "13:30 - 14:00", title: "WebSockets - czyli o tym, jak stworzyć własnego czata", description:  "Podczas warsztatu zajmiemy się stworzeniem aplikacji do dynamicznej wymiany wiadomości czyli mówiąc prościej chatu. Technologie, które zostaną użyte to: Spring Boot/JMS — backendowa część projektu, JavaScript — umożliwiający dynamiczne wyświetlanie wiadomości na GUI, STOMP — protokół wymiany danych tekstowych. "}
      ]
    },
    {
      date: "21.10 (czwartek)",
      events: [
        { date: "21.10 (czwartek)", time: "09:30 - 11:00", title: "Cybersecurity - Bezpieczeństwo w nowoczesnych narzędziach IT", description: "Sprawdź jak z zagadnieniami z obszaru cyberbezpieczeństwa mierzą się specjaliści Fujitsu na przykładzie wirtualizacji dla użytkownika końcowego. "},
        { date: "21.10 (czwartek)", time: "11:30 - 12:00", title: "czwartkowe Targi IT", description: "Spotkania z rekruterami, warsztaty, prezentacje firmy"},
        { date: "21.10 (czwartek)", time: "12:30 - 13:00", title: "Wstęp do technologii chmurowych", description: "Uczestnicy wykładu dowiedzą się czym jest chmura obliczeniowa, jakie są jej rodzaje oraz czemu coraz więcej firm nie wyobraża sobie działania bez jej nieograniczonych możliwości. "},
        { date: "21.10 (czwartek)", time: "13:30 - 14:00", title: "Mam już klaster, i co dalej? - przykłady instalacji aplikacji w Kubernetesie", description: "Podczas tego wykładu, studenci dowiedzą się, w jaki sposób przygotować i zainstalować aplikację w Kubernetesie. Postaramy się przejść po krótce przez cały proces — od zbudowania obrazu aplikacji po wdrożenie na klastrze."},
        { date: "21.10 (czwartek)", time: "14:30 - 15:00", title: "Design Thinking w świecie e-commerce - jak poprawiać doświadczenia użytkowników", description:"E-commerce to w dzisiejszych czasach jeden z kluczowych kanałów sprzedaży i kontaktu z klientem wielu firm. Jednak żeby zdobywać klientów i ich lojalność, nie wystarczy stworzenie serwisu online i uruchomienie kampanii reklamowych. Trzeba dobrze poznać swojego klienta docelowego, jego potrzeby, obawy i styl życia. Kolejnym krokiem jest zbudowanie takiego modelu obsługi klienta, żeby podbić serca Odbiorców i wyróżnić na tle konkurencji. I tu przychodzi z pomocą Design Thinking — zbiór narzędzi, które pozwalają Ci stworzyć Persony zakupowe, Customer Journey Map, przeprowadzić proces generowania pomysłów i na koniec stworzyć prototyp rozwiązania. Podczas warsztatów dowiesz się na czym dokładnie polega Design Thinking i jakie daje możliwości, ponadto na bazie case study będziesz mieć możliwość zaprojektowania rozwiązania na postawiony problem. " }
      ]
    }
  ]


  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService, public dialog: MatDialog) {
  }

  eventsSelected() {
    return this.dataService.getEventsSelectedCount();
  }

  onCheckboxChange(event: any, card: any) {

    console.log(event);
    console.log(card);

    const newEvent = new Event(card.date, card.time, card.title, card.description);

    if (event.checked === true) {
      this.dataService.selectEvent(newEvent);
    }
    else {
      this.dataService.removeEvent(newEvent)
    }

    console.log(this.dataService.getSelectedEvents());
  }

  openMoreInfoBox(event: any) {
    const dialogRef = this.dialog.open(DialogMoreInfo, {
      width: '500px',
      data: { event: event },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'dialog-more-info',
  templateUrl: 'dialog-more-info.html',
  styleUrls: ['./list-available-events.component.css']
})
export class DialogMoreInfo {
  constructor(
    public dialogRef: MatDialogRef<DialogMoreInfo>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
