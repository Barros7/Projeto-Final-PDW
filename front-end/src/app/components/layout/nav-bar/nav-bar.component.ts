import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).on('load',function(){
    $('.dl_link').click(function(){
        var submenu = $('.dl_sub_dd');
        var submenu2 = $('.dl_sub_dd2');
        if (submenu.css('display') == 'none') {
            $('.dl_sub_dd').hide(); //first hide any previously showing submenu's
            submenu.show(); //then show the current submenu
        } else {
            submenu.hide(); //hide the current submenu again
            submenu2.hide();
        }
    });
    $('.dl_link2').click(function(){
      var submenu2 = $('.dl_sub_dd2');
      if (submenu2.css('display') == 'none') {
          $('.dl_sub_dd2').hide(); //first hide any previously showing submenu's
          submenu2.show(); //then show the current submenu
      } else {
          submenu2.hide(); //hide the current submenu again
      }
  });
});
  }

}
