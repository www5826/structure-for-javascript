/**
	队列的实现
**/
// 这里是队列的实现，采取数组来存放 
function Queue(argument) {
	let items = [];
	// 进入队列
	this.enqueue = function(ele){
		items.push(ele);
	};
	// 出队列
	this.dequeue = function(){
		return items.shift();
	};
	// 返回队列中第一个元素
	this.front = function(){
		return items[0];
	};
	// 是否为空
	this.isEmpty = function(){
		return items.length === 0;
	};
	// 队列的长度
	this.size = function(){
		return items.length;
	}
}
// 优先级队列
function PriorityQueue(){
	let items = [];
	// 用对象来展示队列的元素
	function QueueElement(element, priority){
		this.element = element;
		this.priority = priority;
	}
	this.enqueue = function(ele, priority){
		let queueElement = new QueueElement(ele, priority);
		let added = false;
		for (let i = 0,len = items.length;i < len;i++) {
			if (queueElement.priority < items[i].priority){
				items.splice(i, 0, queueElement);
				added = true;
				break;
			}
		}
		if (!added) {
			items.push(queueElement);
		}
	}
	// 其他的方法同上	
	this.print = function(){
		for (var i = 0,len = items.length;i < len;i++) {
			console.log('ele' + items[i].element + ', priority: ' + items[i].priority)
		}
	}
}