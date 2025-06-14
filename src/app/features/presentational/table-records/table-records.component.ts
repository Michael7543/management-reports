import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Records } from '@app/domain/model/generalData/Records';
import { ButtonComponent } from "../../../shared/button/button.component";
import { InputComponent } from "../../../shared/input/input.component";

@Component({
  selector: 'app-table-records',
  imports: [TableModule, CommonModule, ButtonComponent, InputComponent],
  templateUrl: './table-records.component.html',
  styleUrl: './table-records.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRecordsComponent implements OnInit {
  records: Records[] = [];

  ngOnInit(): void {
    this.records = [
      {
        id: 1,
        fecha:new Date('2025-06-04'),
        type_event: 'nu',
        name_event: 'sd',
        user: 'ds',
        estado: 'ds',
        hora_inicio: new Date('2025-06-04T08:30:00'),
        hora_fin: new Date('2025-06-04T10:00:00'),
        funcion: 'ds',
        actividad: 'ds',
      },
    ];
  }
}
