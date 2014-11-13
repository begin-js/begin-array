#!/bin/bash
# dev.sh

function usage() {
echo "
  To develop:
  ./dev.sh

  To run livereload:
  ./dev.sh --livereload

  To run a server:
  ./dev.sh --server
"
}

# Empty arguments
if [[ -z "$1" ]]; then
  usage;
  exit 1;
fi

# Parse arguments
while [[ $# > 0 ]]; do
  key="$1"

  case $key in
    -S|--server)
      __server=true
      ;;

    -l|--livereload)
      __livereload=true
      ;;

    -h|--help)
      usage;
      exit 1;
      ;;

    *)
      usage;
      echo "  [error] unknown option:" $key;
      exit 1;
      ;;
  esac

  shift;
done

# Livereload
if [[ $__livereload ]]; then
  echo "  run livereload"
  livereload . > /dev/null
fi

# Server
if [[ $__server ]]; then
  server_port=8089;
  echo "  run server at port ${server_port}"
  http-server -p $server_port > /dev/null;
fi
