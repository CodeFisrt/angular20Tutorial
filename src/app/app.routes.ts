import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { PipeEx } from './components/pipe-ex/pipe-ex';
import { ResourceAPI } from './components/resource-api/resource-api';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { RxjsBasic } from './components/rxjs/rxjs-basic/rxjs-basic';
import { RxjsOperator } from './components/rxjs/rxjs-operator/rxjs-operator';
import { SubBehReplay } from './components/rxjs/sub-beh-replay/sub-beh-replay';
import { CombineObs } from './components/rxjs/combine-obs/combine-obs';
import { RxjsReactiveForm } from './components/rxjs/rxjs-reactive-form/rxjs-reactive-form';
import { ViewContentChildren } from './components/interviewScenarios/view-content-children/view-content-children';
import { Unsubscribe } from './components/rxjs/unsubscribe/unsubscribe';
import { UserList } from './components/user-list/user-list';
import { SignalInDepth } from './components/signal-in-depth/signal-in-depth';
import { FeesTracking } from './components/fees-tracking/fees-tracking';
import { Ecommerceapp } from './components/ecommerceapp/ecommerceapp';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [

            {
                path: 'admin',
                component: Admin
            },
            {
                path: 'control-flow-statment',
                component: ControlFlow
            },
            {
                path: 'databinding',
                component: DataBinding
            },
            {
                path: 'ecommerceapp',
                component: Ecommerceapp
            },
            {
                path: 'feestracking',
                component: FeesTracking
            },
            {
                path: 'signal-in-depth',
                component: SignalInDepth
            },
 {
                path: 'unsubscribe',
                component: Unsubscribe
            },
            {
                path: 'signal',
                component: SignalEx
            },
            {
                path: 'rxjs-basic',
                component: RxjsBasic
            },
            {
                path: 'rxjs-operator',
                component: RxjsOperator
            },
            {
                path: 'subject',
                component: SubBehReplay
            },
            {
                path: 'Attribute-dir',
                component: AttDirective
            },
            
            {
                path: 'rxjs-reactive',
                component: RxjsReactiveForm
            },
            {
                path: 'get-api',
                component: GetApi,
                canActivate:[]
            },
            {
                path: 'users',
                component: User
            },
             {
                path: 'view-content',
                component: ViewContentChildren
            },
            {
                path: 'reactive-users',
                component: ReactiveUser
            },
            {
                path: 'pipe',
                component: PipeEx
            },
            {
                path: 'resource',
                component: ResourceAPI
            },
            {
                path: 'combine',
                component: CombineObs
            }
        ]
    }

];
