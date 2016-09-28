
  def beauty(s)
    arr = []
    a = s.downcase.split('').sort()
    l = a.size-1
    prev = 0
    max = 26
    sum = 0

    for i in 0..l
      if a[i] != prev
        arr.push(1)
      else
        arr[arr.size-1] += 1
      end
      prev = a[i]
    end

    a = arr.sort().reverse()
    l = a.length-1

    for i in 0..l
      sum += a[i]*max
      max += -1;
    end
    return sum

  end

  log = "aBbcCc"
  puts beauty(log)
