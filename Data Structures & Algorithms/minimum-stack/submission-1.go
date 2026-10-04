
type MinStack struct {
	stack    []int
	minqueue []int
}

func Constructor() MinStack {
	return MinStack{
		stack:    []int{},
		minqueue: []int{},
	}

}

func (this *MinStack) Push(val int) {
	this.stack = append(this.stack, val)
}

func (this *MinStack) Pop() {
	this.stack = this.stack[0 : len(this.stack)-1]

}

func (this *MinStack) Top() int {
	val := this.stack[len(this.stack)-1]

	return val
}

func (this *MinStack) GetMin() int {

	min_val := math.MaxInt

	for _, e := range this.stack {
		min_val = min(min_val, e)
	}

	return min_val

}
