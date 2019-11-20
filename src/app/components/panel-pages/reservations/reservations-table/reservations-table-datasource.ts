import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Reservation } from '../../../../controllers/reservation/reservation';

/**
 * Data source for the ReservationsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

let reservations: Reservation[];

export class ReservationsTableDataSource extends DataSource<Reservation> {

  data: Reservation[] = reservations;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Reservation[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Reservation[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Reservation[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        // case 'name': return compare(a.name, b.name, isAsc);
        case 'inquiry_id':
          return compare(+a.inquiry_id, +b.inquiry_id, isAsc);
        case 'first_name':
          return compare(a.first_name, b.first_name, isAsc);
        case 'last_name':
          return compare(a.last_name, b.last_name, isAsc);
        case 'day_phone_number':
          return compare(a.day_phone_number, b.day_phone_number, isAsc);
        case 'email_address':
          return compare(a.email_address, b.email_address, isAsc);
        case 'request_party_size':
          return compare(+a.requested_party_size, b.requested_party_size, isAsc);
        case 'desired_date':
          return compare(a.desired_date, b.desired_date, isAsc);
        case 'desired_time':
          return compare(a.desired_time, b.desired_time, isAsc);

        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
