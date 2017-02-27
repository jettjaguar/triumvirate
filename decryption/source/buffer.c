// This function places a message in a global buffer

// Needs to be a .c file
#include <unistd.h>           // Can't call read function without including <unistd.h>

int read_into_buffer() {
  extern char buffer[SIZE];       // Doesn't need to be a pointer
  
  read(0, buffer, SIZE);
  
  return 0;
}

