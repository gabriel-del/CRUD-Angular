import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Read2DataSource, Read2Item } from './.read2-datasource';

@Component({
  selector: 'app-read2',
  template: `
    <div class="mat-elevation-z8">
      <table mat-table class="full-width-table" matSort aria-label="Elements">
        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
          <td mat-cell *matCellDef="let row">{{row.name}}</td>
        </ng-container>
    
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    
      <mat-paginator #paginator
          [length]="dataSource.data.length"
          [pageIndex]="0"
          [pageSize]="10"
          [pageSizeOptions]="[5, 10, 20]"
          aria-label="Select page">
      </mat-paginator>
    </div>
    
  `,
  styles: [`
    .full-width-table {
      width: 100%;
    }
    
  `]
})
export class Read2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Read2Item>;
  dataSource = new Read2DataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
