## GOLANG

#### 1. Variables

Cú pháp:

```go
var tenbien kieudulieu = giatrikhoitao
```

Example:

```go
package main
import "fmt"
func main() {
  var number int
  number = 10
  fmt.println(number)
  var number1 int = 11
  fmt.println(number1)
}
```

Result

```go
10
11
```

Type Inference

```go
var email = 'abcd@gmail.com'
```

Go sẽ ngầm hiểu là kiểu string

**Khai báo nhiều biến:**

1. Khai báo nhiều biến cùng kiểu dữ liệu

   ```go
   var a, b int
   a = 1
   b = 2
   var a1, b1 int = 10, 11
   // có thể không cần kiểu dữ liệu
   var a2, b2 = 10, 11
   ```

2. Khai báo nhiều biến khác kiểu dữ liệu

   ```go
   var (
     name string
     address string
     age int
   )
    name = "Robin"
    address = "Viet nam"
    age = 2020

    // có thể khởi tạo luôn giá trị
    var (
      name string = "Example"
      age int = 10
    )

    //Có thể không khai báo kiểu dữ liệu

    var name2, address2, age2 = "name2", "address2", 15

    // short way: thông dụng
    language := "Golang"

   ```

#### 3. Kiểu dữ liệu và hằng số

```go
  package main
  func main() {
    //Kiểu bool
    var myBool bool = true
    // Kiểu string
    var myString string  = "hello"
    // Kiểu int
    var myInt int = 123
    // int 8, 16, 32, 64
    // 1. Range 2. Bits
    // About range
    fmt.Println(math.MinInt8) // -128
    fmt.Println(math.MaxInt8) // 127
    // 16: Min = -32768; Max=32767
    // About bits
    fmt.Println(bits.OnesCount8(math.MaxUnit8)) //8
    fmt.Println(bits.OnesCount16(math.MaxUnit16)) //16
    fmt.Println(bits.OnesCount32(math.MaxUnit32)) //32
    fmt.Println(bits.OnesCount64(math.MaxUnit64)) //64

    //unit
  var myUint uint = -10 //error

  var myByte byte = 1
  fmt.Println(myByte)
  fmt.Printf("%T", myByte) //uint8

  var a byte = "A"
  fmt.Println(a) // 65

  //float
  var myFloat float64 = 10.01
  //complex z = a + bi
  var z complex64 = 10+1i

  // Rune
  var myString string = "Nhẫn"
  runes := []rune(myString)

  for i:= 0; i< len(runes); i++{
    fmt.Printf("%c", runes[i])

  }


  //Zero value (default value if not defined)
  // 0 for numeric, false for boolean, '' for string type


  //
  }
```

Dữ liệu nghiêm ngặt

```go
  var a int = 1
  var b float64 = 1.5
  fmt.Println(a+b) // error
  fmt.Println(float64(a)+b) // right
```

Const (hằng số)

```go
  const PI = 3.14
  fmt.Println(PI)
```

#### 4. Câu lệnh điều khiển

if else

```go
  number := 10
  if number == 10 {
    fmt.Println("number = 10")
  }
```

if statement; condition { // code }
```go
  if a:=100; a>100 {
    fmt.Println("a > 100")
  } else {
    fmt.Println("a = 100")
  }
```

switch - case
```go
  number := 10
  switch number {
    case 1: 
      fmt.Println("number = 1")
    case 2:
      fmt.Println("number = 2")
    case 3, 4, 5: 
      fmt.Println("number = 3, 4 or 5" )
    ...
    default :
      fmt.Println("unknown")
  }


  switch number {
    case number > 10
      fmt.Println("number > 10")
    case number == 10
      fmt.Println("number = 10")
    default :
      fmt.Println("unknown")
  }
```

//FallThrough: không dừng switch case

```go
switch number {
    case 1
      fmt.Println("number = 1")
      fallthrough
    case 10
      fmt.Println("number = 10")
      fallthrough
    case 2
      fmt.Println("number = 2")
      fallthrough
    case 3
      fmt.Println("number = 3")
  }
```

result
```go
number = 10
number = 2
number = 3
```

//break, goto
```go
  switch number {
    case 1
      fmt.Println("number = 1")
      fallthrough
    case 10
      if (number == 10){
        fmt.Println("Break here")
        break
      }
      fmt.Println("number = 10")
      fallthrough
    case 2
      fmt.Println("number = 2")
      fallthrough
    case 3
      fmt.Println("number = 3")
  }
```

Bỏ qua Goto

Câu lệnh lặp
```go
for init; condition; post
for i:= 10; i<10; i++ {
  fmt.Println(i)
}
```

//break and continue as `pascal` in for loop


```go
  j:=0
  for j<10; {
    fmt.Println(j)
    j++
  }
```
//infinite loop
```c
for {
  fmt.Println("....")
}
```


//multiple init; condition; post
```go
  for i,j := 1, 2; i<10 && j<10; i, j = i+1, j+1 {
    fmt.Println(i)
    fmt.Println(j)
  }
```

#### 5. Hàm
```go
  func func_name (params) return_type {
    // something
  }
```

Example:
```go
  package main
  import "fmt"
  func Chao() {
    fmt.Println("Hello")
  }
  func sayHello(name string ) {
    fmt.Println("Hello ", name)
  }

  func greeting(name string ) string  {
    result := fmt.Sprintf("Hello %s", name)
    return result
  }

//multiple return values
  func rectInfo(w, h int)(int, int){
    return w, h
  }

//named return valueses
  func rectInfo(w, h int)(width int, height int, isSquare bool) {
    isSquare = w == h
    return w, h, isSquare
  }

  func main() {
    Chao()
    sayHello("An")
    result := greeting("Ryan")
    fmt.Println(result)

    //
    w, h, isSquare := redctInfo(100, 200)

  }
```

#### 6. Workspace 1
Create 2 files

- main.go && helper.go
- call func in helper.go at main.go
- typing cmd: go run *.go to execute

Create folder helper, move helper.go inside it
Full code
main.go
```go
  package main
  import stringHelper "projectname/helper"

  func main() {
    stringHelper.SayHello()
  }
```
helper/helper.go
```go
  package helper
  import "fmt"

  func SayHello(){
    
  }

  // sayHello: private 
```

config GOPATH 
cmd typing
```go
export GOPATH=...
```













