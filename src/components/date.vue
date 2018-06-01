<template>
    <div class="date-container">
        <router-view></router-view>
        <input placeholder="请选择体检日期" type="text" class="dateChosen" v-model="dateChosen" @click="show()" readonly/>
        <div id="date" v-show="is_dateShow">
            <div class="date-title">
                <button @click="prevMonth()" v-show="!is_show">上个月</button>
                {{ month + 1 }}月
                <button @click="nextMonth()">下个月</button>
            </div>
            <div class="date-top">
                <span>日</span>
                <span>一</span>
                <span>二</span>
                <span>三</span>
                <span>四</span>
                <span>五</span>
                <span>六</span>
            </div>
            <div class="date-body" @click="handleClick">
                <span v-for="(value, index) in data" :key="index" :class="{'colorac': !isClick(value.ymd), 'today' : value.ymd == today}" :data-click="isClick(value.ymd)" :data-date="value.ymd">
                    {{ value.date }}
                </span>
            </div>
            <input type="button" value="确定" @click="determine()"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            baseDate: new Date(),
            year: '',
            month: '',
            date: '',
            day: '',
            time: '',
            is_show: true,
            is_dateShow: false,
            dateChosen: '',
            today: '',
            results: [],
        }
    },
    mounted() {
        sessionStorage.removeItem('dateChosen');
        var month = new Date().getMonth() + 1;
        var date = new Date().getDate();
        if( month < 10 ) {
            month = '0' + month;
        }
        if( date < 10 ) {
            date = '0' + date;
        }
        this.today = new Date().getFullYear() + '-' + month + '-' + date;
        this.init();
        this.getDate();
        this.fetchData();
    },
    methods: {
        //初始化日期
        init() {
            this.year = this.baseDate.getFullYear();
            this.month = this.baseDate.getMonth();
            this.date = this.baseDate.getDate();
            this.day = this.baseDate.getDay();
            this.time = this.baseDate.getTime();
        },
        handleClick(ev){
            if( ev.target.dataset.click == 1) {
                this.dateChosen = ev.target.dataset.date;
                sessionStorage.setItem('dateChosen','dateChosen');
            } else {
                return;
            }
        },
        getDate() {
            this.data = [];
            var date = new Date(this.year,this.month,1);
            date.setTime(date.getTime() - 86400000 * date.getDay());
            do{
                for(var i = 0; i < 7; i++){
                    var obj = {};
                    var month = date.getMonth() + 1;
                    var dateD = date.getDate();
                    if( month < 10 ) {
                        month = '0' + month;
                    }
                    if( dateD < 10 ) {
                        dateD = '0' + dateD;
                    }
                    obj.ymd = date.getFullYear() + '-'+ month + '-' + dateD;
                    obj.date = dateD;
                    this.data.push(obj);
                    date.setTime(date.getTime() + 86400000);
                }
            } while(date.getMonth() == this.month);
        },
        fetchData() {
            this.results = [{
                date: '2017-12-01',//'2017-12-02','2017-12-02','2017-12-03','2017-12-04','2017-12-05','2017-12-06'
                num : 20
            },{
                date: '2017-12-02',
                num : 20
            },{
                date: '2017-12-03',
                num : 20
            },{
                date: '2017-12-04',
                num : 20
            },{
                date: '2017-12-05',
                num : 20
            },{
                date: '2017-12-06',
                num : 20
            },{
                date: '2017-12-07',
                num : 20
            },];
        },
        isClick(ymd) {
            for(var i=0;i<this.results.length;i++) {
                if( ymd == this.results[i].date){
                    return 1;
                }
            }
            return 0;  
        },
        //是否为当前月
        is_now() {
            if( this.year == new Date().getFullYear() && this.month == new Date().getMonth() ){
                this.is_show = true;
            }else{
                this.is_show = false;
            }
        },
        //上个月
        prevMonth() {
            this.month--;
            this.is_now();
            this.baseDate.setMonth(this.month,15);
            this.init();
            this.getDate();
            
        },
        //下个月
        nextMonth() {
            this.month++;
            this.is_now();
            this.baseDate.setMonth(this.month,15);
            this.init();
            this.getDate();
        },
        determine() {
            if( sessionStorage.getItem('dateChosen') != null ){
                this.is_dateShow = false;
            }else{
                alert('请选择日期');
            }
        },
        show() {
            this.is_dateShow = true;
        }
    }
}
</script>
<style>
    #date {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    .date-title {
        font-size: .5rem;
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #f90;
    }
    .date-top {
        font-size: 0;
    }
    .date-top span {
        display: inline-block;
        width: calc(100%/7);
        font-size: .4rem;
        height: 1rem;
        line-height: 1rem;
    }
    .date-body {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    .date-body span {
        display: inline-block;
        width: calc(100%/7);
        font-size: .4rem;
        height: 1rem;
        line-height: 1rem;
    }
    span.colorac {
        color: #acacac;
    }
    span.today {
        color: #f90;
    }
    input {
        width: 3rem;
        height: 1rem;
        font-size: .4rem;
        line-height: 1rem;
    }
</style>
