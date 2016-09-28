def beauty(s)
  a = []
  b = []
  arr = s.downcase.split('').sort()
  prev = 0


  arr.each do |i|
    if i != prev
      a.push(1)
      b.push(i)
    else
      a[a.size-1] += 1
    end
    prev = i
  end

    return [a,b]

    end

  s = "sdasdDsda"
  puts beauty(s)