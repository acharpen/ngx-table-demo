import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxTableComponent, TableDataSource } from '@oorg/ngx-table';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

type Row = { col1: number; col2: string; col3: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(NgxTableComponent) public table!: NgxTableComponent<Row>;

  public dataSource: TableDataSource<Row> = {
    data: [],
    rowHeight: { condensed: 40, regular: 48, relaxed: 56 },
    visibleRowsCount: 10,
    globalFilterPaths: ['col1', 'col2', 'col3'],
    selectable: true,
    showColumnsSettings: true,
    showGlobalFilter: true,
    sortingData: (sortHeaderId) => {
      return (a, b) => {
        if (sortHeaderId === 'col1') return a.col1 - b.col1;
        if (sortHeaderId === 'col2') return a.col2.localeCompare(b.col2);
        return a.col3.localeCompare(b.col3);
      };
    }
  };

  public selection: Row[] = [];

  public constructor(private readonly _snackBar: MatSnackBar) {
    this._loadData().subscribe({
      next: (data) => {
        this.dataSource = { ...this.dataSource, data };
        this.table.sort('col1', 'asc');
      }
    });
  }

  public filterOddRows(): void {
    this.table.filter((item: Row) => item.col1 % 2 === 1);
  }

  public resetFilter(): void {
    this.table.filter(() => true);
  }

  public showRow(item: Row): void {
    this._snackBar.open(`Row: { col1: ${item.col1}, col2: ${item.col2}, col3: ${item.col3} }`, 'Dismiss', {
      duration: 3000
    });
  }

  private _loadData(): Observable<Row[]> {
    return of([...Array(1e4).keys()].map((i) => ({ col1: i, col2: `value2_${i}`, col3: `value3_${i}` }))).pipe(
      delay(1000)
    );
  }
}
