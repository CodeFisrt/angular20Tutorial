
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetApi } from './get-api';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('GetApi', () => {
  let component: GetApi;
  let fixture: ComponentFixture<GetApi>;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [GetApi],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GetApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users and set userList', () => {
    const mockUsers = [{ id: 1, name: 'User1' }];
    httpClientSpy.get.and.returnValue(of(mockUsers));
    component.getUsers();
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    expect(component.userList).toEqual(mockUsers);
  });

  it('should fetch todo items and set todoList', () => {
    const mockTodos = [{ id: 1, title: 'Todo1' }];
    httpClientSpy.get.and.returnValue(of(mockTodos));
    component.getTodoItems();
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
    expect(component.todoList).toEqual(mockTodos);
  });

  it('should fetch bus booking users and set busUserList', () => {
    const mockBusUsers = { data: [{ id: 1, name: 'BusUser1' }] };
    httpClientSpy.get.and.returnValue(of(mockBusUsers));
    component.getAllBusBookignUsers();
    expect(httpClientSpy.get).toHaveBeenCalledWith('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers');
    expect(component.busUserList).toEqual(mockBusUsers.data);
  });
});
