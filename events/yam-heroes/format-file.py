import json

YAM_EVENT_ID = 1000

def main():
    print('> Starting YAM formatting')
    formatted_output = {}
    addresses_list = []
    with open('original.json') as json_file:
        data = json.load(json_file)
        for each in data:
            addresses_list.append(each['address'])
            formatted_output[each['address']] = [YAM_EVENT_ID, ]

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    print('')
    print(f'>> Amount from original file: {len(data)}')
    print(f'>> Amount of addresses formatted: {len(formatted_output)}')
    amount_validation = 'SUCCESS' if len(formatted_output) == len(data) else 'ERROR'
    print(f'>>> Amount validation: {amount_validation}')
    print('')

    duplicate_validation = 'SUCCESS' if len(formatted_output) == len(set(addresses_list)) else 'ERROR'
    print(f'>>> Duplicate address validation: {duplicate_validation}')
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
