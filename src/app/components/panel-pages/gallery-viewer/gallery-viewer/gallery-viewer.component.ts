import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLightboxComponent } from '../../../../control-panel-modals/modal-lightbox/modal-lightbox.component';
import { AuthService } from '../../../../services/auth/auth.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface Tag {
  tag_name: string;
}

export interface GalleryElement {
  name: string;
  description: string;
  tags: Tag[];
  img_url: string;
}

export interface ImageRow {
  row: {
    row_name: string;
    column_1: GalleryElement;
    column_2: GalleryElement;
    column_3: GalleryElement;
    column_4: GalleryElement;
    column_5: GalleryElement;
    //row_columns: ImageColumn[];
  }
}

const GALLERY_ELEMENTS: ImageRow[] = [{
  row: {
    row_name: 'row one',
    column_1: {
      name: 'Club Party Flyer',
      description: 'Party for girls night',
      tags: [{tag_name: 'party'}, {tag_name: 'ladies night'}],
      img_url: 'assets/images/2d2a30fc87d7288a9cbfda076dd6a07e.jpg'
    },
    column_2: {
      name: 'Vip Party',
      description: 'Special Event, VIP Only',
      tags: [{tag_name: 'vip'}, {tag_name: 'party'}, {tag_name: 'private'}],
      img_url: '/assets/images/7ae794d4e1c186d9c2343d6d444bbcdf.jpg'
    },
    column_3: {
      name: 'Lit Fridays',
      description: 'Lit Fridays with DJ Vinny',
      tags: [{tag_name: 'lit'}, {tag_name: 'friday'}, {tag_name: 'party'}, {tag_name: 'DJ Vinny'}],
      img_url: '/assets/images/9e8205b54fcca61cbe370258c4e19665.jpg'
    },
    column_4: {
      name: 'VIP Night',
      description: 'Special Event, VIP Only',
      tags: [{tag_name: 'vip'},{tag_name: 'party'},{tag_name: 'private'}],
      img_url: '/assets/images/53b025b5e4f159be32c380cd20c6905a.jpg'
    },
    column_5: {
      name: 'Girls Night Out',
      description: 'Girls night only party.',
      tags: [{tag_name: 'lit'}, {tag_name: 'friday'}, {tag_name: 'party'}, {tag_name: 'DJ Vinny'}],
      img_url: '/assets/images/887ec24c4d8840a935a414b49f5a5a83.jpg'
    }
  }
}];

/*
row: {
row_name: 'row_two',
column_1: {
name: '',
description: '',
tags: [],
img_url: '/assets/47636e1132c31430b87ca41e371073b0.jpg'
},
column_2: {
name: '',
description: '',
tags: [],
img_url: '/assets/63125d65c304406de3ec051a59d43e08.jpg'
},
column_3: {
name: '',
description: '',
tags: [],
img_url: 'assets/8382896c7f4d61c33a37a9ddec287a54.jpg'
}
}
}];
* */

@Component({
  selector: 'app-gallery-viewer',
  templateUrl: './gallery-viewer.component.html',
  styleUrls: ['./gallery-viewer.component.scss']
})
export class GalleryViewerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  faEdit = faEdit;
  faTrash = faTrash;

/*  @Input galleryTitle: string;
  @Input numberOfColumns: number;
  @Input columnDimensions: number[]; // ['height', 'width']
  @Input dataToDisplay: string[];*/

  constructor(public auth: AuthService,
              private modalService: NgbModal) {}

  /** Columns displayed in the table. Columns IDs can be added, removed or reordered */
  displayedColumns: string [] = ['column_1', 'column_2', 'column_3', 'column_4', 'column_5'];
  /** Initialize DataSource */
  dataSource: any;

  ngOnInit() {
    //this.setColumnsToDisplay(this.numberOfColumns);
    this.paginator._intl.itemsPerPageLabel = 'Rows per page:';
    console.log(GALLERY_ELEMENTS);
    this.dataSource = new MatTableDataSource(GALLERY_ELEMENTS);

    /** Nested filtering logic */
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Function for nested filter logic */
  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setColumnsToDisplay(columns: number) {

    if (columns === null || columns === 0) {

      /** Column count not found */
      /** Build display array based on the default number of columns */
        this.displayedColumns = ['column_one']; //, 'column_two', 'column_three', 'column_four', 'column_five'];
    }
    else
    {
      /** Build display array based off columns specified from the input */
      /*for (let i = 0; i < columns; i++)
      {
       console.log('col_' + i.toString());
       columnName: string = 'col_' + i.toString();
       this.displayedColumns.push(columnName);
      }*/
    }
  }

  editRecord() {

  }

  deleteRecord() {

  }

  viewPhoto(name: string, description: string, img_url: string) {
    console.log('viewPhoto clicked');
    const modalRef = this.modalService.open(ModalLightboxComponent);
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.description = description;
    modalRef.componentInstance.img_url = img_url;
  }

}
