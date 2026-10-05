
func carFleet(target int, position []int, speed []int) int {
	res := 0

	type Car struct {
		positionS int
		speedS    int
	}

	cars := make([]Car, len(position))

	for i := 0; i < len(position); i++ {
		cars[i] = Car{
			positionS: position[i],
			speedS:    speed[i],
		}
	}

	sort.Slice(cars, func(i, j int) bool {
		return cars[i].positionS > cars[j].positionS
	})

	stack := []float32{}

	for i := 0; i < len(cars); i++ {
		// time = target- pos/speed
		pos := cars[i].positionS
		spe := cars[i].speedS

		time := float32(target - pos) / float32(spe)

		

		for len(stack) == 0 || stack[len(stack)-1] < time {
			
			res++
			stack = append(stack, time)
		}

		

	}

	return res

}